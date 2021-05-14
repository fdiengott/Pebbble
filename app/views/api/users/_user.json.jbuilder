json.extract! user, :id, :username, :name, :location, :email, :bio, :website_url
json.partial! '/api/users/profile_picture', user: user
