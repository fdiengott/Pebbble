# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Follow.destroy_all
Card.destroy_all
User.destroy_all

# **************************************************************

u = User.create(
  username: "fred",
  name: "Fred Chopin",
  location: "Paris", 
  email: "betterThanDebussy@me.co",
  bio: "C'est la vie",
  website_url: "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/chopin.jpeg')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".jpeg")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Cloth A", 
  animated: true, 
  category: "animation"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/A.mp4')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "mp4")

# **************************************************************

u = User.create(
  username: "yoshiyukiyagi",
  name:     "Yoshiyuki Yagi",
  location: "Toky Japan",
  email:    'yoshiyukiyagi@me.it',
  bio: "I love Graphic design and Illustration.",
  website_url: "https://www.instagram.com/rincoco2004/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/yoshiyuki-yagi.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Reading books", 
  animated: false, 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/yoshiyuki-yagi-reading-books.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *************
# **************************************************************

u = User.create(
  username: "shayanumar",
  name:     "Shayan Umar",
  location: "Lahore, Pakistan",
  email:    'shayanumar@me.it',
  bio: "Hi, My Name is Shayan Umar, I am a software engineer and also a WordPress web developer, web, graphic, logo, and template designer and expertise in SEO. I have more than 5 years of experience and I also have good knowledge of other development platforms like Java, Php, Asp dot net Core. I am more determined, dedicated, and skillful expertise", 
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/shayan-umar.jpg')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".jpg")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Luminance", 
  animated: false, 
  description: "Hi Dribblers.
  Todays I am a very sharing a very an experimental shot which I have just done with it, Its just design idea inspiration for lamp web template or landing page.
  I hope you really like the idea and you really like the this new unique and very neat designing concept.", 
  category: "web design"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/shayan-umar-luminance.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *************
# **************************************************************

u = User.create(
  username: "rokasaleliunas",
  name:     "Rokas Aleliunas",
  location: "Lithuania",
  email:    'rokasaleliunas@me.it',
  bio: "Casual polar bear who is passionate about creativity and illustration.
  E-mail for project inquiries: rokasaleliunas@gmail.com", 
  website_url: "casualpolarbear.com",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/rokas-aleliunas.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Jay", 
  animated: false, 
  description: "Back for casual, comfortable style for a while.", 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/rokas-aleliunas-jay.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *************
# **************************************************************

u = User.create(
  username: "petergaillard",
  name:     "Peter Gaillard",
  location: "Columbia, SC",
  email:    'petergaillard@me.it',
  bio: "Motion and Interactive Designer
  
  peter@petergaillard.com", 
  website_url: "petergaillard.com",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/peter-gaillard.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "ZenFone 8 Wallpaper", 
  animated: true, 
  description: "Worked with the Asus design team to create a couple wallpapers for the ZenFone 8", 
  category: "animation"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/peter-gaillard-ZenFone8.mp4')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "mp4")

# *************
# **************************************************************

u = User.create(
  username: "muti",
  name:     "MUTI",
  location: "Cape Town, South Africa",
  email:    'muti@me.it',
  bio: "Design studio specialising in illustration, icons, digital painting, typography & animation", 
  website_url: "studiomuti.co.za",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/muti.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Jeff Lowe", 
  animated: false, 
  description: "Reaching great heights. Portrait of alpinist Jeff Lowe.", 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/muti-jeff-lowe.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *************
# **************************************************************

u = User.create(
  username: "majabjeletic",
  name:     "Maja Bjeletic",
  location: "Novi Sad, Serbia",
  email:    'majabjeletic@me.it',
  bio: "Digital Designer specialising in UI Design
  Contact for collaboration: maja.bjeletic987@gmail.com", 
  website_url: "https://www.instagram.com/maja_b_design/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/maja-bjeletic.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Inspiring Creatures", 
  animated: false, 
  description: "---------------------------------------------------
  Follow my work on
  Instagram: @maja_b_design
  Thanks 🙌", 
  category: "web design"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/maja-bjeletic-inspiring-creatures.jpg')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "jpg")

# *************

card = Card.create(
  creator_id: u.id, 
  title: "Green-Purple-Green", 
  animated: false, 
  description: "Green-Purple-Green
  ---------------------------------------------------
  Follow my work on
  Instagram: @maja_b_design
  Thanks 🙌", 
  category: "web design"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/maja-bjeletic-green-purple-green.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *************
# **************************************************************

u = User.create(
  username: "gregoryriaguzov",
  name:     "Gregory Riaguzov",
  location: "Saint-Petersburg",
  email:    'gregoryriaguzov@me.it',
  bio: "Lead UI/UX Designer at @cuberto
  💌 etotgrisha@gmail.com
  👀 instagram.com/gregg.design", 
  website_url: "https://www.instagram.com/gregg.design/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/gregory-riaguzov.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# ************

card = Card.create(
  creator_id: u.id, 
  title: "Walking Cube", 
  animated: true, 
  category: "animation"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/gregory-riaguzov-walking-cube.mp4')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "mp4")

# ************
# **************************************************************

u = User.create(
  username: "giorgijaparidze",
  name:     "giorgi japaridze",
  location: "Tbilisi, Georgia",
  email:    'giorgijaparidze@me.it',
  bio: "Product Designer. Available for remote and contract work, get in touch: ckrixus5@gmail.com", 
  website_url: "https://www.instagram.com/giorgiojaparidze/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/giorgi+japaridze.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *********

card = Card.create(
  creator_id: u.id, 
  title: "Tula", 
  description: "Grow Your Technology Team
  Your challenge is our progress", 
  animated: false, 
  category: "web design"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/giogi-japaridze-tyla.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *********
# **************************************************************

u = User.create(
  username: "felicartteam",
  name:     "Felic Art Team",
  location: "Earth",
  email:    'felicartteam@me.it',
  bio: "Creative studio crafting illustrations, logo and web design. Hire us: hi@felic.art", 
  website_url: "felic.art",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/felic-art.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

# *********
# *********

card = Card.create(
  creator_id: u.id, 
  title: "Artist", 
  description: "Hey Guys!!
  
  My new illustration. Enjoyed making this one. Hope you like it!", 
  animated: false, 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/felic-art-artist.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# *********

card = Card.create(
  creator_id: u.id, 
  title: "Raincoat", 
  animated: false, 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/felic-art-raincoat.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

#*********

card = Card.create(
  creator_id: u.id, 
  title: "Queen Utica portrait", 
  animated: false, 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/felic-art-queen-utica-portrait.jpeg')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "jpeg")

# **********

# **************************************************************

u = User.create(
  username: "facubottazzi",
  name:     "Facu Bottazzi",
  location: "Buenos Aires, Argentina",
  email:    'facubottazzi@me.it',
  bio: "Graphic Designer - Lettering & Illustration
  
  For work inquires:
  facundobottazzi@gmail.com", 
  website_url: "https://www.instagram.com/facubottazzi/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/facu-bottazzi.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

card = Card.create(
  creator_id: u.id, 
  title: "Decade Defector", 
  description: "Funk group, with the goal and need, to create a logo that conveys the organic and modern of their music. They approached me, with a great interest in my work, for which I am very happy. By the way, projects with musical groups are always very fun!
  
  I hope you like it.
  Feedback appreciated!
  
  My other profiles...
  
  Instagram / Behance", 
  animated: false, 
  category: "typography"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/facu-bottazzi-decade_defector.png')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "png")


card = Card.create(
  creator_id: u.id, 
  title: "Sed", 
  description: "'SED'
  Experimental Type
  Playing with morphologies and sensations.
  
  Your feedback is welcome :)", 
  animated: false, 
  category: "typography"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/facu-bottazzi-sed.jpg')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "jpg")

# **************************************************************

u = User.create(
  username: "dmitrystolz",
  name:     "Dmitry Stolz",
  location: "Prague",
  email:    'dmitrystolz@me.it',
  bio: "Illustrator in Beresnev Games", 
  website_url: "https://www.instagram.com/dmitrystolz/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/dmitry-stolz.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")

card = Card.create(
  creator_id: u.id, 
  title: "The Batman / Battinson", 
  description: "Looking forward to Matt Reeves The Batman movie!
  Are you waiting?", 
  animated: false, 
  category: "illustration"
)

card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/dmitry-stolz-the-batman-battinson.webp')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "webp")

# **************************************************************

u = User.create(
  username: "denisokhrimenko",
  name:     "Denis Okhrimenko",
  location: "Russia, Omsk",
  email:    'denisokhrimenko@me.it', 
  website_url: "https://www.instagram.com/desstarko/",
  password: 123456
)

pro_pic_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/denis-okhrimenko.webp')

u.profile_picture.attach(io: pro_pic_file, filename: "#{u.username}-profile-picture" + ".webp")



card = Card.create(
  creator_id: u.id, 
  title: "Searching", 
  description: "Our team has started animating illustrations. This is an illustration by Thierry Fousse in Flame Style.
  
  What styles or illustrations would you like us to bring to life?", 
  animated: true, 
  category: "animation"
)


card_file = open('https://pebbble-seeds.s3.amazonaws.com/pebbble_seed_pics/denis-okhrimenko-Searching.m4v')

card.img.attach(io: card_file, filename: "#{u.username}-#{card.title}." + "m4v")


# ***********************************************************
# ***********************************************************
# ***********************************************************

# ************** FOLLOWS ******************

ids = User.pluck(:id)
combos = []

while combos.length < 30
  newCombo = [ids.sample, ids.sample]
  
  if newCombo.uniq.length > 1 && !combos.include?(newCombo)
    combos << newCombo
    Follow.create(follower_id: newCombo[0], creator_id: newCombo[1])
  end
  
end


# ***********************************************************
# ***********************************************************
# ***********************************************************


# ************** COLLECTIONS ******************

20.times do 
  title = Faker::Book.title
  curator_id = ids.sample

  Collection.create(title: title, curator_id: curator_id)
end


# ************** COLLECTIONS_CARDS ******************

card_ids = Card.pluck(:id)
collection_ids = Collection.pluck(:id)
combos = []

40.times do 
  card_id = card_ids.sample
  collection_id = collection_ids.sample
  newCombo = [card_id, collection_id]

  unless combos.include?(newCombo)
    CollectionsCard.create(card_id: card_id, collection_id: collection_id) 
    combos << newCombo
  end
end


# Pruning collections that don't have any cards
Collection.includes(:cards).map{ |c| c.destroy if c.cards.count == 0  }

# ***********************************************************
# ***********************************************************