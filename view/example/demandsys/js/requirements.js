/**
 * Created by huang on 17-1-11.
 */
//保存为草稿
function addReuqirements(){
    layer.confirm('确定保存吗？',
        {btn: ['确定','取消']},
        function() {
            var post = {};
            post['title'] = $.trim($("input[name='title']").val());
            if(post['title'] == ""){
                layer.msg('主题不许为空!');
                return;
            }
            post['req_type'] = $("#req_type").val();
            if(post['req_type'] == ""){
                layer.msg('需求类型不许为空!');
                return;
            }
            post['req_grade'] = $("#req_grade").val();
            if(post['req_grade'] == ""){
                layer.msg('需求等级不许为空!');
                return;
            }
            var project_idval = $("#project_id_chosen a").text();
            var project_idarr = project_idval.split(':');
            post['project_id'] = project_idarr[0];
            if(post['project_id'] == ""){
                layer.msg('项目名称不许为空!');
                return;
            }
            post['req_description'] = $.trim($("#req_description").val());
            if(post['req_description'] == ""){
                layer.msg('项目描述不许为空!');
                return;
            }
            if($("#brd_document_path").val() != "上传文件"){
                post['brd_document_path'] = $("#brd_document_path").val();
            }else{
                post['brd_document_path'] = "";
            }
            post['req_predict_values'] = $("input[name='req_predict_values']").val();
            if(post['req_predict_values'] == "" || post['req_predict_values']<=0){
                layer.msg('价值评估不许为空且大于0!');
                return;
            }
            if($("input[name='req_values_document_path']").val() != "上传文件"){
                post['req_values_document_path'] = $("input[name='req_values_document_path']").val();
            }else{
                post['req_values_document_path'] = "";
            }
            var shenhe = "";
            var s_count = "";
            $("#shenhe_chosen .chosen-choices li").each(function () {
                if($(this).text() != ""){
                    s_count++;
                    var chenheval = $(this).text();
                    var chenhearr = chenheval.split(':');
                    shenhe += chenhearr[0] + ",";
                }
            });
            if(s_count == 0){
                layer.msg('请选择审核人!');
                return;
            }
            var it = $("#it_man").val();
            if(post['req_type'] == 4){
                it = 419;
            }
            shenhe = shenhe+it;
            // shenhe = shenhe.substring(0, shenhe.length - 1);
            post['approve_id'] = shenhe;//所有审核人
            var chaosong = "";
            $("#chaosong_chosen .chosen-choices li").each(function () {
                if($(this).text() != ""){
                    var chaosongval = $(this).text();
                    var chaosongarr = chaosongval.split(':');
                    chaosong += chaosongarr[0] + ",";
                }
            });
            chaosong = chaosong.substring(0,chaosong.length-1);
            post['copy_groupuser_list'] = chaosong;//超送人
            post['type'] = 2;
            $.ajax({
                type: "post",
                url:ROOT_URL + '/index.php?c=api_requirements&a=addDemand',
                data:{arr:L.json(post)},
                dataType:'json',
                async: false,
                success: function (data) {
                    layer.msg(data.info,{
                        icon:1, //图标
                        time:2000   //2秒关闭(如果不配置,默认是3秒)
                    },function(){
                        location.reload();
                    });
                }
            });
        }
    );
}
//提交审核
function reviewedReuqirements() {
    layer.confirm('确定提交吗？',
        {btn: ['确定','取消']},
        function() {
            var post = {};
            post['title'] = $("input[name='title']").val();
            if(post['title'] == ""){
                layer.msg('主题不许为空!');
                return;
            }
            post['req_type'] = $("#req_type").val();
            if(post['req_type'] == ""){
                layer.msg('需求类型不许为空!');
                return;
            }
            post['req_grade'] = $("#req_grade").val();
            if(post['req_grade'] == ""){
                layer.msg('需求等级不许为空!');
                return;
            }
            var project_idval = $("#project_id_chosen a").text();
            var project_idarr = project_idval.split(':');
            post['project_id'] = project_idarr[0];
            if(post['project_id'] == ""){
                layer.msg('项目名称不许为空!');
                return;
            }
            post['req_description'] = $("#req_description").val();
            if(post['req_description'] == ""){
                layer.msg('项目描述不许为空!');
                return;
            }
            if($("#brd_document_path").val() != "上传文件"){
                post['brd_document_path'] = $("#brd_document_path").val();
            }else{
                post['brd_document_path'] = "";
            }
            post['req_predict_values'] = $("input[name='req_predict_values']").val();
            if(post['req_predict_values'] == "" || post['req_predict_values']<=0){
                layer.msg('价值评估不许为空且大于0!');
                return;
            }
            if($("input[name='req_values_document_path']").val() != "上传文件"){
                post['req_values_document_path'] = $("input[name='req_values_document_path']").val();
            }else{
                post['req_values_document_path'] = "";
            }

            var shenhe = "";
            var s_count = 0;
            $("#shenhe_chosen .chosen-choices li").each(function () {
                if($(this).text() != ""){
                    s_count++;
                    var chenheval = $(this).text();
                    var chenhearr = chenheval.split(':');
                    shenhe += chenhearr[0] + ",";
                }
            });
            if(s_count == 0){
                layer.msg('请选择审核人!');
                return;
            }
            var it = $("#it_man").val();
            if(post['req_type'] == 4){
                it = 419;
            }
            shenhe = shenhe+it;
            // shenhe = shenhe.substring(0, shenhe.length - 1);
            post['approve_id'] = shenhe;//所有审核人
            var chaosong = "";
            $("#chaosong_chosen .chosen-choices li").each(function () {
                if($(this).text() != ""){
                    var chaosongval = $(this).text();
                    var chaosongarr = chaosongval.split(':');
                    chaosong += chaosongarr[0] + ",";
                }
            });
            chaosong = chaosong.substring(0,chaosong.length-1);
            post['copy_groupuser_list'] = chaosong;//超送人
            post['type'] = 1;

            $.ajax({
                type: "post",
                url:ROOT_URL + '/index.php?c=api_requirements&a=addDemand',
                data:{arr:L.json(post)},
                async: false,
                dataType:'json',
                success: function (data) {
                    layer.msg(data.info,{
                        icon:1, //图标
                        time:2000   //2秒关闭(如果不配置,默认是3秒)
                    },function(){
                        location.reload();
                    });
                }
            });
        }
    );
}
//业务负责人审核----取消
function resetreq() {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}
//业务负责人审核----审核成功
function reviewedsuccess(id) {
    layer.confirm('确定审核通过吗？',
        {btn: ['确定','取消']},
        function() {
            var remark = $("#remark").val();
            $.ajax({
                type: "post",
                url:ROOT_URL + '/index.php?c=ctrl_requirements&a=reviewedSuccess',
                data:{id:id,remark:remark},
                async: false,
                dataType:'json',
                success: function (data) {
                    layer.msg(data.info,{
                        icon:1, //图标
                        time:2000   //2秒关闭(如果不配置,默认是3秒)
                    },function(){
                        window.parent.location.reload(true);
                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                        parent.layer.close(index);
                    });
                }
            });
        }
    );
}
//审核不通过
function reviewederror(id) {
    layer.confirm('确定审核不通过吗？',
        {btn: ['确定','取消']},
        function() {
            var remark = $("#remark").val();
            $.ajax({
                type: "post",
                url:ROOT_URL + '/index.php?c=ctrl_requirements&a=reviewedError',
                data:{id:id,remark:remark},
                async: false,
                dataType:'json',
                success: function (data) {
                    layer.msg(data.info,{
                        icon:1, //图标
                        time:2000   //2秒关闭(如果不配置,默认是3秒)
                    },function(){
                        window.parent.location.reload(true);
                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                        parent.layer.close(index);
                    });
                }
            });
        }
    );
}
//业务负责人审核----作废
function cancela(id){
    layer.confirm('确定审核作废吗？',
        {btn: ['确定','取消']},
        function() {
            var remark = $("#remark").val();
            $.ajax({
                type: "post",
                url:ROOT_URL + '/index.php?c=ctrl_requirements&a=cancelDemand',
                data:{id:id,remark:remark},
                async: false,
                dataType:'json',
                success: function (data) {
                    layer.msg(data.info,{
                        icon:1, //图标
                        time:2000   //2秒关闭(如果不配置,默认是3秒)
                    },function(){
                        window.parent.location.reload(true);
                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                        parent.layer.close(index);
                    });
                }
            });
        }
    );
}
//作废
// function btndelll(id) {
//     if(confirm("确定作废吗?")){
//         var remark = $("#remark").val();
//         $.ajax({
//             type: "post",
//             url:ROOT_URL + '/index.php?c=ctrl_requirements&a=cancelDemand',
//             data:{id:id,remark:remark},
//             async: false,
//             dataType:'json',
//             success: function (data) {
//                 if(data.state == 200){
//                     layer.msg('作废成功!');
//                 }else{
//                     layer.msg('作废成功!');
//                 }
//             }
//         });
//     }
// }