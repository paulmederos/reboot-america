class PagesController < ApplicationController

	def home
		@title = "Reboot America"
	end

	def what_is_reboot
		@title = "What is Reboot America?"
	end

	def get_involved
		@title = "Get Involved"
	end

	def get_inspired
		@title = "Get Inspired"
	end

	def meet_us
		@title = "Meet us"
	end

	def agenda
		@title = "Agenda"
	end
	
end
