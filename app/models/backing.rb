# == Schema Information
#
# Table name: backings
#
#  id             :bigint           not null, primary key
#  backer_id      :integer          not null
#  amount_pledged :integer          not null
#  project_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Backing < ApplicationRecord

    belongs_to :user,
    foreign_key: :backer_id,
    class_name: :User 

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

end
