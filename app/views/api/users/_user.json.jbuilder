json.extract! user, :id, :username, :name, :location, :email, :bio, :website_url
json.profile_picture url_for(user.profile_picture)
