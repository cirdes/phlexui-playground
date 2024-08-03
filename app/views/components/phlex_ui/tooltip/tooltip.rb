# frozen_string_literal: true

module PhlexUI
  class Tooltip < Base
    def initialize(placement: "top", **attrs)
      @placement = placement
      super(**attrs)
    end

    def view_template(&)
      div(**attrs, &)
    end

    private

    def default_attrs
      {
        data: {
          controller: "phlexui--tooltip",
          phlexui__tooltip_placement_value: @placement
        },
        class: "group"
      }
    end
  end
end
