# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  category_id  :integer          not null
#  creator_name :string           not null
#  creator_id   :integer          not null
#  funding_goal :integer
#  description  :string
#  pledged      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  location     :string
#  close_date   :date
#
class Project < ApplicationRecord

    belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User 
    
    has_many :backings,
    foreign_key: :project_id,
    class_name: :Backing

    has_one :category,
    foreign_key: :category_id,
    class_name: :Category 

end
