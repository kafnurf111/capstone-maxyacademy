//----------- Popup Kode Group ------------//
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

//--------- Popup Tugas ---------//



let popupTasks = document.getElementById("popup-tasks");
        let navbar = document.getElementsByClassName("nav-navbar")[0];
        let sidebar = document.getElementsByClassName("sidebars")[0];
        let popupTask = document.getElementsByClassName("popup-tasks")[0];
        let overlayTask = document.getElementsByClassName("overlay")[0];

        function openPopupTasks() {
            popupTasks.classList.add("open-popup-tasks");
            navbar.style.zIndex = "-1";
            popupTask.style.zIndex = "1020";
            overlayTask.style.zIndex = "1020";
        }

        function closePopupTasks() {
            popupTasks.classList.remove("open-popup-tasks");
            navbar.style.zIndex = "1020";
            popupTask.style.zIndex = "";
            overlayTask.style.zIndex = "";
        }



//--------------------------------------- Js Code Group --------------------------- //

// Ambil input kode group
var groupInput = document.getElementById("kode_grup");

// Tambahkan event listener untuk keypress
groupInput.addEventListener("keypress", function(event) {
    // Jika tombol yang ditekan adalah "Enter"
    if (event.key === "Enter") {
        // Redirect ke halaman baru hanya jika input tidak kosong
        if (groupInput.value.trim() !== "") {
            redirectToNewPage();
        }
    }
});

// Fungsi untuk mengarahkan pengguna ke halaman baru
function redirectToNewPage() {
    var groupCode = groupInput.value.trim(); // Ambil nilai input dan hapus spasi di awal dan akhir
    // Jika input tidak kosong
    if (groupCode !== "") {
        // Bangun URL halaman baru
        var newPageUrl = "dashboard_hackathon-1st-day1";
        window.location.href = newPageUrl; // Arahkan ke halaman baru
    }
}

// JavaScript

document.getElementById('toggleMember').addEventListener('click', function() {
    var memberList = document.getElementById('MemberList');
    var memberNames = memberList.getElementsByClassName('member-name');

    var namaAnggota = ["Akbar Firmansyah", "Fredrinnn", "Alice Sulastri", "Charlot Geogry", "David Beckham"];

    // Apakah nama anggota sudah ditambahkan sebelumnya
    var namesAdded = memberNames.length > 0;

    // Tambahkan properti CSS flexDirection dan justifyContent saat tombol "Lihat Semua" diklik
    if (!namesAdded) {
        memberList.style.flexDirection = 'column';
        memberList.style.justifyContent = 'flex-start';

        // Tambahkan nama anggota jika belum ditambahkan sebelumnya
        var memberProfiles = memberList.getElementsByClassName('member-profile');
        for (var i = 0; i < memberProfiles.length; i++) {
            var memberProfile = memberProfiles[i];
            var memberName = document.createElement('span');
            memberName.className = 'member-name';
            
        // Menentukan nama anggota berdasarkan indeks i
        if (i < namaAnggota.length) {
            memberName.textContent = namaAnggota[i];
        } else {
            memberName.textContent = 'Nama Anggota ' + (i + 1);
        }

            // Menambahkan nama anggota ke dalam div member-profile
            memberProfile.appendChild(memberName);

            // Menambahkan gaya CSS untuk menyesuaikan nama anggota dalam bentuk kolom
            memberList.style.display = 'flex';


            memberProfile.style.display = 'flex';
            memberProfile.style.paddingBottom = '1rem';
            memberProfile.style.alignItems = 'center';

            // Menambahkan gaya CSS untuk menempatkan nama anggota di sebelah kanan profil
            memberName.style.marginLeft = '1rem';
        }
    }

    // Hapus nama anggota jika sudah ditambahkan sebelumnya
    if (namesAdded) {
        while (memberNames.length > 0) {
            memberNames[0].remove();
        }

        // Hapus properti CSS flexDirection dan justifyContent saat tombol "Sembunyikan" diklik
        memberList.style.removeProperty('flex-direction');
        memberList.style.removeProperty('justify-content');
    }


    // Mengubah teks tombol menjadi "Sembunyikan" atau "Lihat Semua"
    this.textContent = (namesAdded) ? 'Lihat Semua' : 'Lihat Sedikit';
});



document.addEventListener("DOMContentLoaded", function() {
    // Periksa apakah ada elemen yang memiliki kelas 'active'
    var activeElement = document.querySelector('.a-btn-hackathon.active');
    
    // Periksa apakah ada elemen yang memiliki kelas 'collapse' yang terhubung dengan elemen yang aktif
    var activeCollapse = activeElement.getAttribute('data-bs-target');

    // Periksa apakah elemen yang sesuai dengan 'activeCollapse' ada
    if (activeCollapse) {
        var collapseElement = document.querySelector(activeCollapse);
        
        // Periksa apakah elemen yang sesuai dengan 'activeCollapse' adalah elemen yang valid
        if (collapseElement) {
            collapseElement.classList.add('show');
        }
    }
});


// Discussion JS
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    // Handle form submission
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const messageText = messageInput.value.trim();

        if (messageText === '') {
            return; // Do not send empty messages
        }

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            &lt;div class="message-content"&gt;
                &lt;p&gt;${messageText}&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="message-reply"&gt;
                &lt;button class="btn-reply"&gt;Reply&lt;/button&gt;
            &lt;/div&gt;
        `;

        // Append message to message list
        messageList.appendChild(messageElement);

        // Clear input
        messageInput.value = '';

        // Scroll to the latest message
        messageList.scrollTop = messageList.scrollHeight;

        // Handle reply button click
        const replyButton = messageElement.querySelector('.btn-reply');
        replyButton.addEventListener('click', function() {
            const replyInput = document.createElement('textarea');
            replyInput.classList.add('form-control', 'reply-input');
            replyInput.rows = 2;
            replyInput.placeholder = 'Write your reply...';

            const replySendButton = document.createElement('button');
            replySendButton.classList.add('ui', 'primary', 'button', 'btn-send-reply');
            replySendButton.textContent = 'Send';

            const replyForm = document.createElement('div');
            replyForm.classList.add('reply-form');
            replyForm.appendChild(replyInput);
            replyForm.appendChild(replySendButton);

            messageElement.appendChild(replyForm);

            replySendButton.addEventListener('click', function() {
                const replyText = replyInput.value.trim();

                if (replyText === '') {
                    return; // Do not send empty replies
                }

                // Create reply element
                const replyElement = document.createElement('div');
                replyElement.classList.add('reply');
                replyElement.innerHTML = `
                    &lt;div class="reply-content"&gt;
                        &lt;p&gt;${replyText}&lt;/p&gt;
                    &lt;/div&gt;
                `;

                // Append reply to message element
                messageElement.insertBefore(replyElement, replyForm);

                // Remove reply form after sending
                messageElement.removeChild(replyForm);
            });
        });
    });
});


// Calendar JS
$('#calendar').fullCalendar({
    defaultView: 'agendaFourDay',
    header: {
        left: 'prev, next',
        center: 'title',
        right: 'month, agendaFourDay',
    },
    views: {
      agendaFourDay: {
        type: 'agenda',
        duration: { days: 3 },
        buttonText: '3 days'
      }
    }
  });