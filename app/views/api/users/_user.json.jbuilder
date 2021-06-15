json.extract! user, :id, :username, :name, :location, :email, :bio, :website_url, :num_cards, :num_collections, :num_liked_cards
json.profile_picture user.profile_picture.attached? ? url_for(user.profile_picture) : nil