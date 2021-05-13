
json.partial! 'api/cards/card', card: @card
json.extract! @card, :description