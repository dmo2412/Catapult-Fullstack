# == Schema Information
#
# Table name: categories
#
#  id   :bigint           not null, primary key
#  name :string           not null
#
class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :projects,
    foreign_key: :category_id,
    class_name: :Project 

end
