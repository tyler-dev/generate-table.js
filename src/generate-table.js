/**  
  * @desc This jQuery plugin is used to generate html tables from a json datatype. Also includes sorting functionality.
  * @author Tyler Bergman - TylerDev.net - tyler@tylerdev.net
*/
(function($){
	$.fn.generateTable = function() {

		var _this = this;
		var id = $(this).attr('id');
		var element = $('#'+$(this).attr('id'));

		/** 
		* @desc Function for Sorting both numbers and letters
		* @param a - Object, b - Object, index
		*/
		this.sortData = function(a, b, index, reverse) {
			reverse = reverse || false;

			if(!reverse)
				return a[index] == b[index] ? 0 : (a[index] < b[index] ? -1 : 1);
			else
				return a[index] == b[index] ? 0 : (a[index] > b[index] ? -1 : 1);
		}

		/** 
		* @desc Resets table so that it can be re-generated.
		*/
		this.resetTable = function() {
			$('#'+id+' tbody').html('');
		}

		/** 
		* @desc Generates a table and sorts based on a drop down field
		*/
		this.init = function() {
			$.getJSON( $( element ).attr( "data-source" ), function( data ) {
				var output = "";


				if ( $('select[data-table="'+ id +'"]').length ) {

					var option = $('select[data-table="'+ id +'"]').find('option:selected'); 
					var reverse = option.attr("data-sort");

					data.sort(function(a,b){
						return _this.sortData(a, b, $('select[data-table="'+ id +'"]').val(), reverse);
				}

				$.each(data, function() {

					var row = "";

					$.each(this, function(key , value) {
						row += (value === parseInt(value)) ? "<td>$"+ value +"</td>" : "<td>"+ value +"</td>"
					});

					output += "<tr>"+row+"</tr>";
				});

				$( output ).appendTo( element ).find('tbody');


			});
		}

		/** 
		* @desc Detects Change event in dropdown field and excutes the resetTable() function and then executes the generate() function
		*/
		$('select[data-table="'+ id +'"]').change( function(){ 
			_this.resetTable();
			_this.init();
		});


		_this.init();
	}
})(jQuery);