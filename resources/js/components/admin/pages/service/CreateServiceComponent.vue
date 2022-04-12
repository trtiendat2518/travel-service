<template>
    <div class="row match-height">
        <div class="col-md-12 col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="first-name-vertical"
                                                >Tên dịch vụ</label
                                            >
                                            <input
                                                type="text"
                                                id="first-name-vertical"
                                                class="form-control"
                                                name="fname"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="email-id-vertical"
                                                >Hình ảnh</label
                                            >
                                            <input
                                                type="file"
                                                id="email-id-vertical"
                                                class="form-control"
                                                name="email-id"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-vertical"
                                                >Nội dung mô tả</label
                                            >
                                            <vue-editor
                                                :editorToolbar="customToolbar"
                                            ></vue-editor>
                                        </div>
                                    </div>

                                    <div
                                        class="col-12 d-flex justify-content-end"
                                    >
                                        <button
                                            type="submit"
                                            class="btn btn-primary me-1 mb-1"
                                        >
                                            Tạo mới
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
        VueEditor,
    },
    data() {
        return {
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                [{ size: ["small", false, "large", "huge"] }],
                ["bold", "italic", "underline", "strike"],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" },
                ],
                [{ header: 1 }, { header: 2 }],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ color: [] }, { background: [] }],
                ["link", "image", "video", "formula"],
                [{ direction: "rtl" }],
            ],
        };
    },
};
</script>

<style scoped>
@import "~vue2-editor/dist/vue2-editor.css";
</style>
