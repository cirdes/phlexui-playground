# frozen_string_literal: true

module Lui
  class CommandList < Base
    def view_template(&)
      ul(**attrs, &)
    end

    private

    def default_attrs
      { class: "max-h-[300px] overflow-y-auto overflow-x-hidden", role: "listbox" }
    end
  end
end
