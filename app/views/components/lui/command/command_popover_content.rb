# frozen_string_literal: true

module Lui
  class CommandPopoverContent < Base
    def view_template(&)
      div(
        id: "tooltip",
        role: "tooltip",
        data: { lui__command_popover_target: "tooltip" },
        class: "invisible absolute top-0 left-0 p-1.5 rounded",
        &
      )
    end
  end
end
