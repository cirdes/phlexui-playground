# frozen_string_literal: true

module Lui
  class ComboboxContent < Base
    def view_template(&)
      div(**attrs) do
        div(
          data: { controller: "lui--combobox-content", action: "keydown.up->lui--combobox-content#handleKeyUp keydown.down->lui--combobox-content#handleKeyDown keydown.enter->lui--combobox-content#handleKeyEnter keydown.esc->lui--combobox-content#handleKeyEsc"  },
          class: "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground rounded-lg border shadow-md", &)
      end
    end

    private

    def default_attrs
      {
        data: { lui__combobox_target: "popover" },
        class: "invisible absolute top-0 left-0 p-1.5 rounded"
      }
    end
  end
end
