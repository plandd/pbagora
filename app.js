/*! pbagora 22-12-2015 */
angular.module("PBAapp",[]).controller("OffCanvas",["$scope",function(a){a.name="teste"}]),angular.module("PBAapp",["ngRoute"]).controller("SearchController",["$scope",function(a){function b(a){$.ajax({url:getData.ajaxDir,type:"GET",dataType:"html",data:{action:"pba_search_form",keyword:a},beforeSend:function(){$(".the-results").html('<i class="small-12 left text-center">Aguarde...</i>')},success:function(a){$(".the-results").html(a),$(".the-results").perfectScrollbar()}})}var c=null;c&&clearTimeout(c),a.search=function(a){c=setTimeout(b(a),100)}}]);