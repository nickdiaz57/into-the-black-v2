class GameSerializer < ActiveModel::Serializer
  attributes :id, :completed, :won, :belongs_to
end
