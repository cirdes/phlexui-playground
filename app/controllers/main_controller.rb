# frozen_string_literal: true

class MainController < ApplicationController
  layout -> { ApplicationLayout }

  def index
    render(Main::Index.new)
  end
end
