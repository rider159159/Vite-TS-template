<script setup>
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { Bold, Italic, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles'
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { Link, LinkImage } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import { Table, TableCellProperties, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'
import { FontSize, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font'

const props = defineProps({
  modelValue: String,
  articleId: Number,
  count: Number
})

const emit = defineEmits(['update:modelValue', 'checkValue'])

const content = ref(props.modelValue)

const editor = ClassicEditor

const editorConfig = {
  plugins: [
    Alignment,
    BlockQuote,
    Bold,
    CloudServices,
    Essentials,
    FontSize,
    FontColor,
    FontBackgroundColor,
    GeneralHtmlSupport,
    Heading,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    Table,
    TableCellProperties,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline,
    SourceEditing,
    Subscript,
    Superscript
  ],
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'subscript',
      'superscript',
      '|',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'alignment:left',
      'alignment:right',
      'alignment:center',
      'alignment:justify',
      '|',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'sourceEditing',
      '|'
    ],
    shouldNotGroupWhenFull: true
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
    ]
  },
  fontSize: {
    options: [
      10,
      12,
      14,
      'default',
      18,
      20,
      22
    ]
  },
  fontColor: {
    colorPicker: true
  },
  image: {
    resizeOptions: [
      {
        name: 'resizeImage:original',
        value: null,
        label: 'Original'
      },
      {
        name: 'resizeImage:40',
        value: '40',
        label: '40%'
      },
      {
        name: 'resizeImage:60',
        value: '60',
        label: '60%'
      }
    ],
    toolbar: [
      'linkImage',
      '|',
      'imageTextAlternative',
      'toggleImageCaption',
      '|',
      'imageStyle:inline',
      {
        name: 'break',
        title: 'Break text',
        items: [
          'imageStyle:alignBlockLeft',
          'imageStyle:block',
          'imageStyle:alignBlockRight'
        ],
        defaultItem: 'imageStyle:block'
      },
      {
        name: 'wrap',
        title: 'Wrap text',
        items: [
          'imageStyle:alignLeft',
          'imageStyle:alignRight'
        ],
        defaultItem: 'imageStyle:alignRight'
      },
      '|',
      'resizeImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties'
    ]
  },
  link: {
    defaultProtocol: 'http://',
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: '另開視窗',
        attributes: {
          target: '_blank'
        }
      }
    }
  },
  mediaEmbed: {
    previewsInData: true
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true
      }
    ]
  },
  ui: {
    poweredBy: {
      horizontalOffset: 20
    }
  }
}

const ckeditorInstance = ref(null)

function onInput(info) {
  emit('update:modelValue', info)
}

function onReady(editor) {
  ckeditorInstance.value = editor
  editor.conversion.for('downcast').attributeToElement({
    model: 'italic',
    view: 'em',
    converterPriority: 'high'
  })
}

function checkEditor() {
  const isSourceStatus = document.querySelector('.ck-source-editing-area')
  if (isSourceStatus) {
    return emit('checkValue', ckeditorInstance.value.getData())
  }
  emit('checkValue', content.value)
}

watch(
  () => props.count,
  (count, preCount) => {
    checkEditor()
  })

</script>

<template>
  <div>
    <Ckeditor :editor="editor" v-model="content" :config="editorConfig" @ready="onReady" @input="onInput" />
  </div>
</template>

<style>
.ck-editor__editable_inline, .ck-source-editing-area {
    height: 20em;
    resize: vertical;
}
.ck-source-editing-area textarea{
    overflow: auto;
}
.ck-content ol, .ck-content ul {
    margin: revert;
    padding: revert;
}
.ck-content p {
    margin: revert;
}
.ck-content h1, .ck-content h2, .ck-content h3, .ck-content h4, .ck-content h5, .ck-content h6 {
    font-size: revert;
    font-weight: revert;
}
.ck-content a {
    color: revert;
    text-decoration: revert;
}

.ck-content em{
  font-style:italic;
}

.ck-content em>span{
  font-style:italic!important
}

</style>
