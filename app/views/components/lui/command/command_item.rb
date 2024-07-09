# frozen_string_literal: true

module Lui
  class CommandItem < Base
    def initialize(value: nil, **attrs)
      @value = value
      super(**attrs)
    end

    def view_template(&block)
      li(**attrs) do
        plain(helpers.lucide_icon("check", class: "text-zinc-950 invisible", size: 20, data: { lui__command_item_target: "check" }))
        block.call
      end
    end

    private

    def default_attrs
      {
        class:
          "relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        data: {
          lui__command_target: "item",
          value: @value,
          selected: false,
          controller: "lui--command-item",
          action: "click->lui--command-item#teste"
        },
        role: "option"
      }
    end
  end
end
