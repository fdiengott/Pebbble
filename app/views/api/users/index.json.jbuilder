

@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :name
    json.profile_picture user.profile_picture.attached? ? url_for(user.profile_picture) : nil
  end
end
