# frozen_string_literal: true

class PhlexController < ApplicationController
  layout -> { ApplicationLayout }

  def combobox
    render(Phlex::Combobox.new)
  end

  def tooltip
    render(Phlex::Tooltip.new)
  end
end
