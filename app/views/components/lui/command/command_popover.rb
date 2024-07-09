# frozen_string_literal: true

module Lui
  class CommandPopover < Base
    def view_template(&)
      div(data: { controller: "lui--command-popover" }, &)
    end
  end
end
