/* ==========================================================================
   WHAT PEOPLE KNOW OF HIM
   ==========================================================================

   THIS IS THE ONLY FILE YOU EDIT TO ADD OR REMOVE MEMORIES.

   When someone sends in a memory — by email, by message, in a comment
   somewhere — you copy a block below, paste their words in, and save.

   ------------------------------------------------------------------
   WHAT EACH LINE MEANS
   ------------------------------------------------------------------

     circle      how this person knows Nhân. Choose ONE of these four
                 words exactly. It sets the colour of the note.

                    "family"     his family
                    "friend"     friends, neighbours, coworkers
                    "school"     Klein Forest, classmates
                    "stranger"   someone who never met him

     relation_en  what to print above the note, in English.
                  Examples: "His brother"  "A classmate"  "A stranger"
     relation_vi  the same, in Vietnamese.
                  Examples: "Anh trai"  "Bạn học"  "Một người xa lạ"

     text_en      what the person said, in English.
     text_vi      what the person said, in Vietnamese.

     name         how they want to be named. A first name is fine.
                  Write ""  (two quote marks) to leave it unsigned.

   ------------------------------------------------------------------
   IF SOMEONE ONLY WRITES IN ONE LANGUAGE
   ------------------------------------------------------------------

   That is normal and completely fine. Put their real words in the
   language they wrote in, and put a translation in the other. Never
   change what someone actually said — translate it, do not improve it.

   ------------------------------------------------------------------
   ONE RULE
   ------------------------------------------------------------------

   Only put someone's words here if they are happy for them to be
   public under that name. If in doubt, ask them first.
   ========================================================================== */

const MEMORIES = [

  /* ---- START OF THE LIST ------------------------------------------------
     The first entry below is real: it is what Hiếu said publicly at the
     press conference outside the hospital. Please keep his wording
     exactly as he said it.

     The entries after it are EXAMPLES showing how the wall looks when it
     fills up. Delete them and replace them with real memories.
     -------------------------------------------------------------------- */

  {
    circle:      "family",
    relation_en: "His brother",
    relation_vi: "Anh trai",
    text_en:     "I manage to speak this out loud, to raise my voice, so this won't happen again. A lot of people are hurt, but couldn't speak. They don't raise their voice up, so I have to raise my voice up. I want to end these things. We all want peace, everyone has a life, everyone is important.",
    text_vi:     "Tôi cố gắng nói ra điều này, cố gắng cất tiếng nói của mình, để chuyện này đừng xảy ra thêm một lần nào nữa. Có rất nhiều người đã chịu đau đớn mà không nói ra được. Họ không cất được tiếng nói của mình, nên tôi phải cất tiếng nói thay. Tôi muốn những chuyện như thế này phải chấm dứt. Ai trong chúng ta cũng mong được sống bình yên. Ai cũng có một cuộc đời. Ai cũng đáng quý như nhau.",
    name:        "Hiếu"
  },

  {
    circle:      "school",
    relation_en: "EXAMPLE — a classmate",
    relation_vi: "VÍ DỤ — bạn học",
    text_en:     "Replace this with something a real person sent in. The best ones are small and specific: what he said, what he did, what he would never let you pay for.",
    text_vi:     "Hãy thay đoạn này bằng lời của một người thật. Những kỷ niệm hay nhất thường là những chuyện rất nhỏ và rất cụ thể: anh đã nói gì, đã làm gì, đã nhất định không cho ai trả tiền cái gì.",
    name:        ""
  },

  {
    circle:      "stranger",
    relation_en: "EXAMPLE — someone who never met him",
    relation_vi: "VÍ DỤ — một người chưa từng gặp anh",
    text_en:     "People who only heard about Nhân in the news write in too. Their notes belong here as much as anyone's. That is what this page is for.",
    text_vi:     "Có những người chỉ biết đến Nhân qua bản tin cũng viết đôi dòng gửi về. Những lời ấy cũng có chỗ ở đây như của bất kỳ ai khác. Trang này lập ra chính là vì điều đó.",
    name:        ""
  }

  /* ---- END OF THE LIST --------------------------------------------------
     A COMMA goes after every }  EXCEPT the very last one.

     Here is a blank entry, ready to copy:

     ,{
       circle:      "friend",
       relation_en: "A friend",
       relation_vi: "Một người bạn",
       text_en:     "",
       text_vi:     "",
       name:        ""
     }
     -------------------------------------------------------------------- */

];
