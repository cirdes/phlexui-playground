# frozen_string_literal: true

module Phlex
  class Combobox < ApplicationView
    def view_template
      div(class: "flex flex-col items-center mt-72 gap-10") do
        Combobox do
          ComboboxTrigger(aria_controls: "list")
          ComboboxContent(id: "list") do
            ComboboxSearchInput(placeholder: "Search framework...")
            ComboboxList do
              ComboboxEmpty { "No results found." }
              ComboboxGroup(heading: "Suggestions") do
                ComboboxItem(value: "calendar") do
                  span { "Calendar" }
                end
                ComboboxItem(value: "smile") do
                  span { "Search Emoji" }
                end
                ComboboxItem(value: "calculator") do
                  span { "Calculator" }
                end
              end

              ComboboxSeparator()

              ComboboxGroup(heading: "Settings") do
                ComboboxItem(value: "profile") do
                  span { "Profile" }
                end
                ComboboxItem(value: "billing") do
                  span { "Billing" }
                end
                ComboboxItem(value: "settings") do
                  span { "Settings" }
                end
              end
            end
          end
        end
      end
    end
  end
end
