class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :name, :email, :password_digest, presence: true

  after_initialize :ensure_session_token

  has_one_attached :profile_picture


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
  end

  def num_following
  end



end

