<template>
    <div>
        <h1>Api con page</h1>
        <v-row>
            <v-col col="12">
                <v-btn color="success" @click="newItem()">NewItem</v-btn>
            </v-col>
            <v-col cols="3" v-for="(item, index) in apidata" :key="index">
                <v-card width="300">
                    <v-img width="300"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5kyGXRsJTnCvfM371Ycg8u7k9viw1gW-g&s"></v-img>
                    <v-card-title primary-title>
                        {{ item.username }}
                        {{ item.email }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="success" @click="editItem(item)">Edit</v-btn>
                        <v-btn color="error" @click="delItem(item)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogedit" max-width="500px">
            <v-card>
                <v-card-title primary-title>
                    {{ savemode }}
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field name="username" label="Username" id="username"
                                v-model="postData.username"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field name="password" label="Password" id="password"
                                v-model="postData.password"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field name="firstName" label="First Name" id="firstName"
                                v-model="postData.firstName"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field name="lastName" label="Last Name" id="lastName"
                                v-model="postData.lastName"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field name="email" label="Email" id="email" v-model="postData.email"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="closeItem()">Cancel</v-btn>
                    <v-btn text color="info" @click="saveSelect()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "apicon",
    data() {
        return {
            id: '',
            dialogedit: true,
            apidata: [],
            postData: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
                approve: false,
            },
            postDefault: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
                approve: false,
            }
        };
    },
    created() {
        this.setToken();
        if (localStorage.getItem("Token") != undefined) {
            this.getData();
        }
    },
    computed: {
        savemode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    methods: {
        newItem() {
            this.id = ""
            this.postData = { ...this.postDefault }
            this.dialogedit = true
        },
        editItem(item) {
            this.id = item._id
            this.postData = { ...item }
            this.dialogedit = true

        },
        closeItem() {
            this.id = ''
            this.postData = { ...this.postDefault }
            this.dialogedit = false
        },
        saveSelect() {
            if (this.id != '') {
                this.savePutData()
            } else this.savePostData()
        },
        saveData() {
            console.log("THIS IS POSTDATA")
            console.log(this.postData)
            this.dialogedit = false
        },
        setToken() {
            localStorage.setItem(
                "Token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmIzNDI1ZmUzNGZiMGQ2M2RiYzU1OTciLCJmaXJzdE5hbWUiOiJ1c2VyIiwibGFzdE5hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQGhvdG1haWwuY29tIiwiaWF0IjoxNzIzNTQyODQ1fQ.ybKuNn_8vm4EAX3iJAVV40vq_qT32p0QpBrlVx3DiyI"
            );
        },
        getData() {
            this.axios
                .get("http://localhost:3000/users", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    this.apidata = response.data.data;
                    console.log(this.apidata);
                });
        },
        async savePostData() {
            try {
                const response = await this.axios.post('http://localhost:3000/api/v1/register', this.postData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });
                console.log(response.data);
                this.apidata = response.data.data;
                alert('Create complete');
                this.getData();
                this.closeItem();
            } catch (error) {
                console.error(error);
                alert("ERROR");
            }
        },
        async savePutData() {
            try {
                const response = await this.axios.put(`http://localhost:3000/api/v1/approve/${this.id}`, { approve: true }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });
                console.log(response.data);
                this.apidata = response.data.data;
                alert('Update complete');
                this.getData();
                this.closeItem();
            } catch (error) {
                console.error(error);
                alert("ERROR");
            }
        },
        async delItem(item) {
            if (confirm('delete ' + item.username)) {
                try {
                    const response = await this.axios.put(`http://localhost:3000/api/v1/delete/${item._id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        },
                    });
                    console.log(response.data);
                    this.apidata = response.data.data;
                    alert('Delete complete');
                    this.getData();
                    this.closeItem();
                } catch (error) {
                    console.error(error);
                    alert("ERROR");
                }
            }

        },
    },
}
</script>