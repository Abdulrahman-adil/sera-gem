// script/myScript.js

document.addEventListener("DOMContentLoaded", function () {
  // ============== متغيرات عامة ==============
  const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const backToTopBtn = document.querySelector(".back-to-top");
  const contactForm = document.getElementById("contactForm");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // ============== القائمة المتحركة ==============
  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-bars");
    this.querySelector("i").classList.toggle("fa-times");
  });

  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      burgerMenu.querySelector("i").classList.remove("fa-times");
      burgerMenu.querySelector("i").classList.add("fa-bars");
    });
  });

  // ============== التمرير السلس ==============
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // ============== زر العودة للأعلى ==============
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // ============== نظام التبويب (أنواع الحجامة) ==============
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // إزالة النشاط من جميع الأزرار
      tabBtns.forEach((b) => b.classList.remove("active"));
      // إضافة النشاط للزر المحدد
      this.classList.add("active");

      // إخفاء جميع المحتويات
      tabPanes.forEach((pane) => pane.classList.remove("active"));
      // عرض المحتوى المحدد
      document.getElementById(tabId).classList.add("active");
    });
  });

  // ============== نموذج الاتصال ==============
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();

      if (name && email && phone && service) {
        // هنا يمكنك إضافة إرسال البيانات إلى الخادم
        console.log("تم إرسال النموذج:", {
          name,
          email,
          phone,
          service,
          message,
        });

        alert(`شكراً ${name}، تم استلام رسالتك وسنتصل بك قريباً.`);
        contactForm.reset();
      } else {
        alert("الرجاء تعبئة جميع الحقول المطلوبة.");
      }
    });
  }

  // ============== تأثير التمرير على الأقسام ==============
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.pageYOffset;

      if (
        scrollPosition >
        sectionTop - window.innerHeight + sectionHeight / 3
      ) {
        section.classList.add("animate");
      }
    });
  });

  // ============== رسالة الترحيب ==============
  setTimeout(() => {
    const welcomeMsg = document.createElement("div");
    welcomeMsg.className = "welcome-msg";
    welcomeMsg.innerHTML = `
            <div class="welcome-content">
                <h3>مرحباً بكم في مركز سيرا جيم</h3>
                <p>نقدم لكم خدمات الحجامة بأنواعها وفق أعلى معايير الجودة والسلامة</p>
                <button class="close-welcome">موافق</button>
            </div>
        `;
    document.body.appendChild(welcomeMsg);

    document
      .querySelector(".close-welcome")
      .addEventListener("click", function () {
        welcomeMsg.style.opacity = "0";
        setTimeout(() => {
          welcomeMsg.remove();
        }, 300);
      });
  }, 2000);

  // ============== تأثيرات عند التحميل ==============
  setTimeout(() => {
    document.querySelector(".hero-content").classList.add("loaded");
  }, 500);
});

