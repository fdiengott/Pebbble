

@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :name
    json.partial! '/api/users/profile_picture', user: user
  end
end
