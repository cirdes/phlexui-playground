# frozen_string_literal: true

class PhlexController < ApplicationController
  layout -> { ApplicationLayout }

  def combobox
    render(Phlex::Combobox.new)
  end

  def command
    render(Phlex::Command.new)
  end
end
