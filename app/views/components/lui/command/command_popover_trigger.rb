# frozen_string_literal: true

module Lui
  class CommandPopoverTrigger < Base
    def view_template
      Button(value: "value2", variant: "outline", role: "combobox", class: "w-[200px] justify-between", id: "button", aria_describedby: "tooltip", data: {
        lui__command_popover_target: "button",
        action: "click->lui--command-popover#teste"
      }) do
        span(data: { lui__command_popover_target: "content" }) { "Select framework..." }
        plain(helpers.lucide_icon("chevrons-up-down", class: "w-4 h-4"))
      end
    end
  end
end
