

@users.each do |user|
  json.set! user.id do 
    # json.partial! 'api/users/user', user: user
    json.extract! user, :id, :name, 
    json.profile_picture url_for(user.profile_picture)
  end
end
