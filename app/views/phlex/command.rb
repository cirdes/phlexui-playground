# frozen_string_literal: true

module Phlex
  class Command < ApplicationView
    def view_template
      div(class: "flex flex-col items-center mt-72 gap-10") do
        CommandPopover do
          CommandPopoverTrigger()
          CommandPopoverContent do
            div(class: "w-80") do
              Command(class: "rounded-lg border shadow-md") do
                CommandInput(placeholder: "Type a command or search...")
                CommandList do
                  CommandEmpty { "No results found." }
                  CommandGroup(heading: "Suggestions") do
                    CommandItem(value: "calendar") do
                      span { "Calendar" }
                    end
                    CommandItem(value: "smile") do
                      span { "Search Emoji" }
                    end
                    CommandItem(value: "calculator") do
                      span { "Calculator" }
                    end
                  end

                  CommandSeparator()

                  CommandGroup(heading: "Settings") do
                    CommandItem(value: "profile") do
                      span { "Profile" }
                    end
                    CommandItem(value: "billing") do
                      span { "Billing" }
                    end
                    CommandItem(value: "settings") do
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
  end
end
