json.partial! '/api/users/user', user: @user
json.partial! '/api/users/profile_picture', user: @user
json.extract! @user, :when_joined