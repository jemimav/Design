(function($) {

	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};

	$.fn.panel = function(userConfig) {

		// si pas d'élément
			if (this.length == 0)
				return $this;

		// ou plusieurs élément
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Valeurs
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config
			config = $.extend({

				// delais
					delay: 0,

				// cacher le paneau quand cliquer sur le lien
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// reset en position cacher
					resetScroll: false,
					resetForms: false,

				// menu apparaitera du coté de la fenetre
					side: null,

					target: $this,
					visibleClass: 'visible'

			}, userConfig);

				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// methodes
				$this._hide = function(event) {

					// si deja cacher
						if (!config.target.hasClass(config.visibleClass))
							return;

					// Cacher.
						config.target.removeClass(config.visibleClass);
				};

		// Body.

			// cacher le menu si on clique sur la page
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// afficher le menu et aller vers les liens
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});
		return $this;

	};

})(jQuery);