class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :name, :email, :password_digest, presence: true

  after_initialize :ensure_session_token

  has_one_attached :profile_picture, dependent: :destroy
  # has_many_attached :card_imgs, through: :cards, source: 
  has_many :cards, 
    foreign_key: :creator_id, 
    class_name: :Card,
    dependent: :destroy

  has_many :received_follows, 
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :received_followed, 
    foreign_key: :creator_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followers, 
    through: :received_followed, 
    source: :follower

  has_many :followed_users, 
    through: :received_follows, 
    source: :creator

  has_many :collections, 
    foreign_key: :curator_id, 
    class_name: :Collection

  has_many :likes, 
    foreign_key: :liker_id, 
    class_name: :Like

  has_many :liked_cards, 
    through: :likes,
    source: :liked_card

  ### AUTH METHODS

  def self.find_by_credentials(username, password)

    # to allow for username or password. check if username includes '@'
    # CHANGE VARIABLE NAME?
    # if username.include?("@")
    #   user = User.find_by(email: username)
    # else 
    #   user = User.find_by(username: username)
    # end

    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user
    else 
      nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    pw_obj = BCrypt::Password.new(self.password_digest)
    pw_obj.is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end


  ### HELPER METHODS
  def when_joined
    self.created_at.strftime("%b %Y")
  end

  def num_followers
    self.followers.count
  end
  
  def num_following
    self.followed_users.count
  end

  def user_cards 
    self.cards
  end

  def num_cards
    self.cards.count
  end

  def num_collections
    self.collections.count
  end

  def num_liked_cards
    self.liked_cards.count
  end

end

