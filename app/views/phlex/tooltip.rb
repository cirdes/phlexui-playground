# frozen_string_literal: true

module Phlex
  class Tooltip < ApplicationView
    def view_template
      div(class: "h-screen flex items-center justify-center") do
        Tooltip do
          TooltipTrigger { "Hover" }
          TooltipContent do
            plain("Add to library")
          end
        end
      end
    end
  end
end
