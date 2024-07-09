# frozen_string_literal: true

class PhlexController < ApplicationController
  layout -> { ApplicationLayout }

  def combobox
    render(Phlex::Combobox.new)
  end
end
