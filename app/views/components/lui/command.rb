# frozen_string_literal: true

module Lui
  class Command < Base
    def view_template(&)
      div(**attrs, &)
    end

    private

    def default_attrs
      { data: { controller: "lui--command" }, class: "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground" }
    end
  end
end
