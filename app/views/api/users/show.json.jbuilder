json.partial! '/api/users/user', user: @user
json.extract! @user, :when_joined