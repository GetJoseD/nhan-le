/* ==========================================================================
   THE PHOTOGRAPHS
   ==========================================================================

   THIS IS THE ONLY FILE YOU EDIT TO ADD OR REMOVE PHOTOS.

   ------------------------------------------------------------------
   HOW TO ADD A PHOTOGRAPH — three steps
   ------------------------------------------------------------------

   1. Put the picture file into the folder   assets/photos/
      Give it a simple name with no spaces, like  nhan-and-hieu.jpg

   2. Copy one whole block from { to },  paste it into the list below,
      and change the wording.

   3. Save the file. That is all. The wall updates itself.

   ------------------------------------------------------------------
   THE TWO LINES THAT MUST NEVER BE DELETED
   ------------------------------------------------------------------

   The line below that reads      const PHOTOS = [
   and the line at the very end   ];

   Everything you add goes BETWEEN those two lines. If either one goes
   missing, the whole photo wall vanishes from the page without showing
   any error at all. That is the most common thing to go wrong.

   ------------------------------------------------------------------
   WHAT EACH LINE MEANS
   ------------------------------------------------------------------

     file        the name of the picture file, exactly as you saved it,
                 including whether it ends in .jpg or .JPG or .png.
                 Capital letters matter once the site is online.
                 Write null (no quote marks) to show an empty tile.

     caption_en  the English caption. Say WHO is in the photograph and
                 how they know Nhân. That is the point of this page.

     caption_vi  the same caption in Vietnamese.

   Leave a caption as ""  (two quote marks, nothing between) if a photo
   needs no caption.

   ------------------------------------------------------------------
   PLEASE READ THIS BEFORE ADDING ANYTHING
   ------------------------------------------------------------------

   Photographs almost always have other people in them. Someone's
   children, someone going through a hard year, someone who would not
   want to be on a public website.

   Ask yourself two questions before adding a photo:
     - would his family have chosen this one?
     - is everyone else in it alright with being here?

   When you are not sure, leave it out. It can always go in later.
   Nothing here can be un-seen once it is public.
   ========================================================================== */

const PHOTOS = [

  /* ---- START OF THE LIST ---------------------------------------------- */

  {
    file:       "1.jpg",
    caption_en: "Nhân at home for the holidays",
    caption_vi: "Nhân về nhà dịp lễ"
  },

  {
    file:       "2.jpg",
    caption_en: "Laughing at school",
    caption_vi: "Cười ở trường"
  },

  {
    file:       "3.jpg",
    caption_en: "Acting tough, but we all know",
    caption_vi: "Làm bộ ngầu, mà ai cũng biết tỏng"
  },

  {
    file:       "4.jpg",
    caption_en: "At school with a friend",
    caption_vi: "Ở trường cùng một người bạn"
  },

  {
    file:       "5.jpg",
    caption_en: "Out with friends",
    caption_vi: "Đi chơi cùng bạn bè"
  },

  {
    file:       "6.jpg",
    caption_en: "Presenting a project",
    caption_vi: "Thuyết trình một bài dự án"
  },
  {
    file:       "7.jpg",
    caption_en: "Resting after a very long day",
    caption_vi: "Nghỉ ngơi sau một ngày dài mệt nhoài"
  },
  {
    file:       "8.jpg",
    caption_en: "Enjoying a meal with friends",
    caption_vi: "Ăn uống vui vẻ cùng bạn bè"
  },
  {
    file:       "9.jpg",
    caption_en: "Someone snuck this photo of Nhan from the table!",
    caption_vi: "Có người chụp lén Nhân từ bên kia bàn!"
  },
  {
    file:       "10.jpg",
    caption_en: "Hey, Nhan wants to know what is that over there?",
    caption_vi: "Ê, Nhân hỏi cái gì đằng kia vậy?"
  },
  {
    file:       "11.jpg",
    caption_en: "Sweeping and cleaning up.",
    caption_vi: "Đang quét dọn."
  },
  {
    file:       "12.jpg",
    caption_en: "Chilling at a food truck.",
    caption_vi: "Ngồi chơi ở xe bán đồ ăn."
  }

  /* ---- END OF THE LIST --------------------------------------------------
     A COMMA goes after every }  EXCEPT the very last one.

     Here is a blank entry, ready to copy. Note the comma at the front,
     which closes off whichever entry came before it:

     ,{
       file:       "",
       caption_en: "",
       caption_vi: ""
     }
     -------------------------------------------------------------------- */

];
