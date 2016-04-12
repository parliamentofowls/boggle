require_relative "boggle_board"

describe BoggleGame do
  describe "#initialize" do
    let(:valid_game) {BoggleGame.new}

    it "initializes with a board" do
      expect(valid_game.board).to_not be(nil)
    end
  end
end
