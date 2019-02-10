(function () {
    document.getElementById("upload_file1").addEventListener('change', function(){
        var file = this.files[0];
        var f = new FileReader();
        f.onload = function () {
            console.log(f.result);
            axios({
                method: 'post',
                url: `example.com`,
                data: f.result
            }).then(function (response) {
                document.getElementById('content').innerHTML += response.data;
            });
        }
        f.readAsDataURL(file);
    })
    
    document.getElementById("upload_file2").addEventListener('change', function () {
        var file = this.files[0];
        var formData = new FormData();
        formData.append('img', file, file.name);
        console.log(formData.get("img"));
        let config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };
        axios.post('example.com', formData, config).then(response => {  
            console.log(response.data);
        });
    })
    
})();


