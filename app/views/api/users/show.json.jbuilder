json.partial! '/api/users/user', user: @user
# json.partial! '/api/users/profile_picture', user: @user
json.extract! @user, :when_joined, :num_followers, :num_following, :num_cards, :num_collections