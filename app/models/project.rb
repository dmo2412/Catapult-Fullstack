# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  category_id  :integer          not null
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

    validates :title, :category_id, :creator_id, :funding_goal, presence: true
    validates :title, uniqueness: true
    # validates :ensure_photo
    # has_one_attached :photo

    belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User 
    
    has_many :backings,
    foreign_key: :project_id,
    class_name: :Backing

    has_one :category,
    foreign_key: :category_id,
    class_name: :Category 

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << 'photo must be included'
        end
    end

end
