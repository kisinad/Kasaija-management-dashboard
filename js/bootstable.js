/*
Bootstable
 @description  Javascript library to make HMTL tables editable, using Bootstrap
 @version 1.1
 @autor Tito Hinostroza
*/
  "use strict";
  var params = null;       
  var colsEdi =null;
  var newColHtml = '<div class="btn-group pull-right">'+
'<button id="bEdit" type="button" class="btn btn-sm btn-default"  onclick="rowEdit(this);">' +
'<i class="fas fa-pencil-alt"></i>'+
'</button>'+
'<button id="bElim" type="button" class="btn btn-sm btn-default"  onclick="rowElim(this);">' +
'<i class="fas fa-trash" aria-hidden="true"></i>'+
'</button>'+
'<button id="bAcep" type="button" class="btn btn-sm btn-default"  style="display:none;" onclick="rowAcep(this);">' + 
'<i class="fas fa-check"></i>'+
'</button>'+
'<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;"  onclick="rowCancel(this);">' + 
'<i class="fas fa-times" aria-hidden="true"></i>'+
'</button>'+
    '</div>';

     var saveColHtml = '<div class="btn-group pull-right">'+
'<button id="bEdit" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowEdit(this);">' +
'<i class="fas fa-pencil-alt"></i>'+
'</button>'+
'<button id="bElim" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowElim(this);">' +
'<i class="fas fa-trash" aria-hidden="true"></i>'+
'</button>'+
'<button id="bAcep" type="button" class="btn btn-sm btn-default"   onclick="rowAcep(this);">' + 
'<i class="fas fa-check"></i>'+
'</button>'+
'<button id="bCanc" type="button" class="btn btn-sm btn-default"  onclick="rowCancel(this);">' + 
'<i class="fas fa-times" aria-hidden="true"></i>'+
'</button>'+
    '</div>';
  var colEdicHtml = '<td name="buttons">'+newColHtml+'</td>'; 
var colSaveHtml = '<td name="buttons">'+saveColHtml+'</td>';
    
  $.fn.SetEditable = function (options) {
    var defaults = {
        columnsEd: null,         
        $addButton: null,        
        onEdit: function() {},   
        onBeforeDelete: function() {}, 
        onDelete: function() {}, 
        onAdd: function() {}     
    };
    params = $.extend(defaults, options);
    this.find('thead tr').append('<th name="buttons"></th>'); 
    this.find('tbody tr').append(colEdicHtml);
    var $tabedi = this;   
    
    if (params.$addButton != null) {
        
        params.$addButton.click(function() {
            rowAddNew($tabedi.attr("id"));
        });
    }
    if (params.columnsEd != null) {
        //Extract felds
        colsEdi = params.columnsEd.split(',');
    }
  };
function IterarCamposEdit($cols, tarea) {
    var n = 0;
    $cols.each(function() {
        n++;
        if ($(this).attr('name')=='buttons') return;  
        if (!EsEditable(n-1)) return;   
        tarea($(this));
    });
    
    function EsEditable(idx) {
        if (colsEdi==null) {  
            return true;  
        } else {  
            for (var i = 0; i < colsEdi.length; i++) {
              if (idx == colsEdi[i]) return true;
            }
            return false;  
        }
    }
}
function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr'); 
    $row.attr('id', '');  
}
function FijModoEdit(but) {

    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr');
    $row.attr('id', 'editing');  
}
function ModoEdicion($row) {
    if ($row.attr('id')=='editing') {
        return true;
    } else {
        return false;
    }
}
function rowAcep(but) {    
    
    var $row = $(but).parents('tr'); 
    var $cols = $row.find('td'); 
    if (!ModoEdicion($row)) return;  
    IterarCamposEdit($cols, function($td) {  
      var cont = $td.find('input').val(); 
      $td.html(cont);  
    });
    FijModoNormal(but);
    params.onEdit($row);
}
function rowCancel(but) {
    var $row = $(but).parents('tr');  
    var $cols = $row.find('td'); 
    if (!ModoEdicion($row)) return;  
    IterarCamposEdit($cols, function($td) { 
        var cont = $td.find('div').html(); 
        $td.html(cont);  
    });
    FijModoNormal(but);
}
function rowEdit(but) {  
    var $td = $("tr[id='editing'] td");
    rowAcep($td)
    var $row = $(but).parents('tr');  
    var $cols = $row.find('td');  
    if (ModoEdicion($row)) return;  
    IterarCamposEdit($cols, function($td) {  
        var cont = $td.html(); 
        var div = '<div style="display: none;">' + cont + '</div>';  
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input);  
    });
    FijModoEdit(but);
}
function rowElim(but) { 
    var $row = $(but).parents('tr');  
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();
}
function rowAddNew(tabId) {
var $tab_en_edic = $("#" + tabId);  
    var $filas = $tab_en_edic.find('tbody tr');
    if ($filas.length==0) {
        var $row = $tab_en_edic.find('thead tr'); 
        var $cols = $row.find('th');  
        var htmlDat = '';
        $cols.each(function() {
            if ($(this).attr('name')=='buttons') {
                htmlDat = htmlDat + colEdicHtml; 
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });
        $tab_en_edic.find('tbody').append('<tr>'+htmlDat+'</tr>');
    } else {
        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent()); 
        $tab_en_edic.find('tr:last').attr('id','editing'); 
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td'); 
        
        $cols.each(function() {
            if ($(this).attr('name')=='buttons') {
            } else {
                var div = '<div style="display: none;"></div>'; 
                var input = '<input class="form-control input-sm"  value="">';

                $(this).html(div + input); 
            }
        });
         $ultFila.find('td:last').html(saveColHtml);

    }
    params.onAdd();
}
function TableToCSV(tabId, separator) {
    var datFil = '';
    var tmp = '';
    var $tab_en_edic = $("#" + tabId);  
    $tab_en_edic.find('tbody tr').each(function() {
        if (ModoEdicion($(this))) {
            $(this).find('#bAcep').click();  
        }
        var $cols = $(this).find('td');  
        datFil = '';
        $cols.each(function() {
            if ($(this).attr('name')=='buttons') {
            } else {
                datFil = datFil + $(this).html() + separator;
            }
        });
        if (datFil!='') {
            datFil = datFil.substr(0, datFil.length-separator.length); 
        }
        tmp = tmp + datFil + '\n';
    });
    return tmp;
}