# frozen_string_literal: true

module RBUI
  class SelectItem < Base
    def initialize(value: nil, **attrs)
      @value = value
      super(**attrs)
    end

    def view_template(&block)
      div(**attrs) do
        selected_icon
        block&.call
      end
    end

    private

    def selected_icon
      svg(
        xmlns: "http://www.w3.org/2000/svg",
        viewbox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        class: "invisible group-aria-selected:visible	mr-2 h-4 w-4",
        stroke_width: "2",
        stroke_linecap: "round",
        stroke_linejoin: "round"
      ) do |s|
        s.path(
          d: "M20 6 9 17l-5-5",
        )
      end
    end

    def default_attrs
      {
        role: "option",
        tabindex: "0",
        class: "group relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        data: {
          controller: "rbui--select-item",
          action: "click->rbui--select#selectItem keydown.enter->rbui--select#selectItem keydown.down->rbui--select#handleKeyDown keydown.up->rbui--select#handleKeyUp keydown.esc->rbui--select#handleEsc",
          rbui__select_target: "item"
        },
        data_value: @value,
        data_orientation: "vertical",
        aria_selected: "false"
      }
    end
  end
end
