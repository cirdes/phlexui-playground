# frozen_string_literal: true

module PhlexUI
  class TooltipTrigger < Base
    def view_template(&)
      Button(**attrs, &)
    end

    private

    def default_attrs
      {
        data: { phlexui__tooltip_target: "trigger" },
        variant: :outline,
        class: "peer"
      }
    end
  end
end
