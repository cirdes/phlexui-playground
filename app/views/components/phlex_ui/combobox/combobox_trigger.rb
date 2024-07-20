# frozen_string_literal: true

module PhlexUI
  class ComboboxTrigger < Base
    def view_template
      puts attrs
      button(**attrs) do
        span(data: { phlexui__combobox_target: "content" }) { "Select framework..." }
        plain(helpers.lucide_icon("chevrons-up-down", class: "w-4 h-4"))
      end
    end

    private

    def default_attrs
      { class: "inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",
      data: {
        action: "phlexui--combobox#onClick",
        phlexui__combobox_target: "input"
      },
      role: "combobox", variant: "outline",
      aria: {
        expanded: "false",
        haspopup: "listbox",
        autocomplete: "none"
      } }
    end
  end
end
