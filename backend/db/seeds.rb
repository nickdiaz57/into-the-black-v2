puts "Seeding."

User.destroy_all
Game.destroy_all

u1 = User.create(name: "Kirk")
u2 = User.create(name: "Spock")

puts "Seeding complete."