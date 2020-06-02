# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create([{name: 'Danny Morgan'}, {email: 'djmorgan2412@gmail.com'}])
user2 = User.create([{name: 'Michael Jordan'}, {email: 'Imthegoatofgoats@yahoo.com'}])
user3 = User.create([{name: 'Michael Scott'}, {email: 'michaelgaryscott@gmail.com'}])

project1 = Project.create([{title: 'Pet Rock'} , {category_id: '1'}, {creator_name: 'Michael Scott'}, {creator_id: '3' }, {funding_goal: 100000 }, {description: 'for all your pet rock needs'}, {pledged: 8000}, {location: 'United States'}, {close_date: Date.parse('2020-08-12')} ])
project2 = Project.create([{title: '11 foot rims'} , {category_id: '2'}, {creator_name: 'Michael Jordan'}, {creator_id: '2' }, {funding_goal: 1000000 }, {description: 'Sometimes I\'m too good for a 10 foot hoop'}, {pledged: 50000}, {location: 'United States'}, {close_date: Date.parse('2020-10-04')} ])

category1 = Category.create([{name: 'Hardware'}])
category2 = Category.create([{name: 'Accessories'}])

backing1 = Backing.create([{backer_id: 3}, {amount_pledged: 50000}, {project_id: 2}])