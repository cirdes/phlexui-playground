# frozen_string_literal: true

module Lui
  class ComboboxList < Base
    def view_template(&)
      ul(**attrs, &)
    end

    private

    def default_attrs
      { class: "max-h-[300px] overflow-y-auto overflow-x-hidden", role: "listbox", tabindex: "-1" }
    end
  end
end
